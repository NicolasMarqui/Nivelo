import { getConnection } from "typeorm";
import { UserPlatformAccount } from "./../entities/UserPlatformAccount";
import { Platforms } from "./../entities/Platforms";
import { User } from "./../entities/User";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class UserPlatformAccountResolver {
    // Get all UserPlatformAccount
    @Query(() => [UserPlatformAccount])
    async allPlatformAccount(): Promise<UserPlatformAccount[]> {
        const plat = await UserPlatformAccount.find({
            relations: ["user", "platform"],
        });
        return plat;
    }

    // Add a platform to User
    @Mutation(() => Boolean)
    async addPlatformUser(
        @Arg("userID") userID: number,
        @Arg("platformID") platformID: number,
        @Arg("userAccount") userAccount: string
    ): Promise<Boolean> {
        const user = await User.findOne({
            where: { id: userID },
            relations: ["platforms"],
        });
        if (!user) return false;

        const platform = await Platforms.findOne({ where: { id: platformID } });
        if (!platform) return false;

        const account = new UserPlatformAccount();

        account.userId = userID;
        account.platformId = platformID;
        account.user = user;
        account.platform = platform;
        account.account = userAccount;

        await account.save();

        return true;
    }

    // Get all users platform accounts
    @Query(() => [UserPlatformAccount])
    async getSingleAccount(
        @Arg("id") id: number
    ): Promise<UserPlatformAccount[] | undefined> {
        const plat = await UserPlatformAccount.find({
            where: { userId: id },
            relations: ["user", "platform"],
        });
        return plat;
    }

    // Update user platform account
    @Mutation(() => UserPlatformAccount)
    async updatePlatformUser(
        @Arg("userID") userId: number,
        @Arg("platformID") platformId: number,
        @Arg("newAccount") newAccount: string
    ): Promise<UserPlatformAccount | Boolean> {
        const plat = await UserPlatformAccount.findOne({
            where: { userId, platformId },
        });
        if (!plat) return false;

        plat.account = newAccount;
        plat.save();

        return plat;
    }

    // Remove platform from user
    @Mutation(() => Boolean)
    async removePlatformUser(
        @Arg("userID") userID: number,
        @Arg("platformID") platformID: number
    ): Promise<Boolean> {
        const platform = await getConnection()
            .createQueryBuilder()
            .delete()
            .from(UserPlatformAccount)
            .where("userId = :userID", { userID })
            .andWhere("platformId = :platformId", { platformId: platformID })
            .returning("*")
            .execute();

        if (platform.affected) {
            return true;
        }

        return false;
    }
}
