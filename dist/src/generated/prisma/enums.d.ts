export declare const users_type: {
    readonly leitor: "leitor";
    readonly autor: "autor";
    readonly admin: "admin";
};
export type users_type = (typeof users_type)[keyof typeof users_type];
