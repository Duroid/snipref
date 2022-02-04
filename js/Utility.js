const proto = Object.getPrototypeOf;
const setProto = Object.setPrototypeOf;
export const extend = setProto;
export const virtual = proto;
export const override = proto;