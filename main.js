var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function CalculateTheQuadraticEquation(a, b, c) {
    return __awaiter(this, void 0, void 0, function () {
        var d, result1, result2;
        return __generator(this, function (_a) {
            d = b * b - 4 * a * c;
            if (d < 0)
                return [2 /*return*/, null];
            if ((isNaN(b) && isNaN(c)) || (isNaN(a) && isNaN(c)))
                return [2 /*return*/, 0];
            else if (isNaN(a) && isNaN(b))
                return [2 /*return*/, null];
            else if (isNaN(b))
                return [2 /*return*/, Math.pow((-c / a), 0.5)];
            else if (isNaN(c))
                return [2 /*return*/, [0, -b / a]];
            else if (isNaN(a))
                return [2 /*return*/, -c / b];
            result1 = (-b + Math.pow(d, 0.5)) / (2 * a);
            result2 = (-b - Math.pow(d, 0.5)) / (2 * a);
            if (d === 0)
                return [2 /*return*/, result1];
            else
                return [2 /*return*/, [result1, result2]];
            return [2 /*return*/];
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var a, b, c, result, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (process.argv.length > 6) {
                        console.log("It receives at no more three argument as interger number");
                        return [2 /*return*/];
                    }
                    a = parseInt(process.argv[2]);
                    b = parseInt(process.argv[3]);
                    c = parseInt(process.argv[4]);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, CalculateTheQuadraticEquation(a, b, c)];
                case 2:
                    result = _a.sent();
                    if (result === null) {
                        console.log("There are no result");
                    }
                    else {
                        console.log(result);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.log("There are some errors: " + err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
main();
