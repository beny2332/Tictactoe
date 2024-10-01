"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const main = document.querySelector(".main");
const createFromLogin = document.querySelector(".createFromLogin");
createFromLogin.addEventListener("click", LoadingRegistrationPage);
function LoadingRegistrationPage() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("./register/register.html");
            console.log(response);
            const register = yield response.text();
            main.innerHTML = register;
        }
        catch (err) {
            console.log(err);
        }
    });
}
