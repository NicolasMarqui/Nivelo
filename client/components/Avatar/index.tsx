import Image from "next/image";

interface AvatarProps {
    avatar: string;
}

const Avatar: React.FC<AvatarProps> = ({ avatar }: AvatarProps) => {
    return (
        <>
            {avatar ? (
                <Image
                    src={avatar}
                    width={120}
                    height={120}
                    className="tutor__avatar"
                />
            ) : (
                <img
                    src="https://picsum.photos/200"
                    width={120}
                    height={120}
                    className="tutor__avatar"
                />
            )}
        </>
    );
};
export default Avatar;
