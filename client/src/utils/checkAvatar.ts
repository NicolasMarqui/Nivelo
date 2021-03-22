export const checkAvatar = (avatar: string, name: string): string => {
    return avatar && avatar !== undefined
        ? avatar
        : `https://ui-avatars.com/api/?name=${name}`;
};
