import { Tutor } from "./../entities/Tutor";
import { CategoryInput } from "./inputs/index";
import { getConnection } from "typeorm";
import { Category } from "./../entities/Category";
import {
    Arg,
    Field,
    Mutation,
    ObjectType,
    Query,
    Resolver,
} from "type-graphql";
import { FieldError } from "./helpers";

@ObjectType()
class CategoryResponse {
    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[];

    @Field(() => Category, { nullable: true })
    category?: Category;
}

@Resolver()
export class CategoryResolver {
    // Get all categories
    @Query(() => [Category])
    async allCategories(): Promise<Category[]> {
        const allCat = await getConnection()
            .getRepository(Category)
            .createQueryBuilder("category")
            .leftJoinAndSelect("category.tutors", "tutor")
            .getMany();

        return allCat;
    }

    // Get all categories from tutor
    @Query(() => [Category])
    async allCategoriesTutor(
        @Arg("tutorID") tutorID: number
    ): Promise<Category[]> {
        const allCat = await getConnection()
            .getRepository(Category)
            .createQueryBuilder("category")
            .leftJoinAndSelect("category.tutors", "tutor")
            .where("tutor.id = :id", { id: tutorID })
            .getMany();

        return allCat;
    }

    // Add new category
    @Mutation(() => CategoryResponse)
    async newCategory(
        @Arg("options") options: CategoryInput
    ): Promise<CategoryResponse> {
        let category;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Category)
                .values({
                    ...options,
                })
                .returning("*")
                .execute();
            category = result.raw[0];
        } catch (err) {
            console.log(err);
        }

        return { category };
    }

    // Assign category to tutor
    @Mutation(() => Category)
    async categoryToTutor(
        @Arg("tutorID") tutorID: number,
        @Arg("categoryID") categoryID: number
    ): Promise<Category | Boolean> {
        const category = await Category.findOne({
            where: { id: categoryID },
            relations: ["tutors"],
        });
        if (!category) return false;

        const tutor = await Tutor.findOne({ where: { id: tutorID } });
        if (!tutor) return false;

        category.tutors.push(tutor);
        category.save();

        return category;
    }

    // Remove category to tutor
    @Mutation(() => Boolean)
    async removeCategoryFromTutor(
        @Arg("tutorID") tutorID: number,
        @Arg("categoryID") categoryID: number
    ): Promise<Boolean> {
        const category = await Category.findOne({
            where: { id: categoryID },
            relations: ["tutors"],
        });

        if (!category) return false;

        const tutor = await Tutor.findOne({
            where: { id: tutorID },
            relations: ["categories"],
        });
        if (!tutor) return false;

        if (tutor.categories.length === 0) {
            return false;
        }

        tutor.categories = tutor.categories.filter(
            (cat) => cat.id !== category.id
        );
        tutor.save();

        return true;
    }

    // Update category
    @Mutation(() => Category)
    async updateCategory(
        @Arg("id") id: number,
        @Arg("options") options: CategoryInput
    ): Promise<Category> {
        let category;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .update(Category)
                .set({
                    ...options,
                })
                .where("id = :id", { id })
                .returning("*")
                .execute();

            category = result.raw[0];
        } catch (err) {
            console.log(err);
        }

        return category;
    }

    // Delete category
    @Mutation(() => Boolean)
    async deleteCategory(@Arg("id") id: number): Promise<Boolean> {
        const categoryToDelete = await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Category)
            .where("id = :id", { id })
            .execute();

        if (categoryToDelete.affected) {
            return categoryToDelete.affected > 0 ? true : false;
        }

        return false;
    }
}
