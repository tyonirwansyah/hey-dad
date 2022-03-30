"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.heyDad = void 0;
const intl_dad_1 = __importDefault(require("./intl-dad"));
function heyDad(fatherName, lang = "en") {
    if (!lang || !intl_dad_1.default.hasOwnProperty(lang)) {
        throw new Error("Language not yet supported, but hey dadz!");
    }
    const re = /{{([\s\S]+)}}/;
    const greeting = intl_dad_1.default[lang];
    const dad = greeting.match(re)[0].slice(2, -2);
    return greeting.replace(re, fatherName || dad);
}
exports.heyDad = heyDad;
//# sourceMappingURL=index.js.map