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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
Object.defineProperty(exports, "__esModule", { value: true });
// Function to handle content editing
// Function to handle content editing
function makeEditable() {
    var editableElements = document.querySelectorAll('[contenteditable]');
    editableElements.forEach(function (element) {
        element.addEventListener('input', function (event) {
            var target = event.target;
            var key = target.id;
            var value = target.innerText;
            // For demonstration purposes, log changes
            console.log("Updated ".concat(key, ": ").concat(value));
            // Implement saving to local storage or other persistent storage if needed
        });
    });
}
// Call the function to make elements editable
makeEditable();
// Download PDF functionality using html2pdf.js
var html2pdf_js_1 = require("html2pdf.js");
var downloadButton = document.getElementById('downloadPdf');
downloadButton.addEventListener('click', function () {
    var resumeElement = document.getElementById('resume');
    (0, html2pdf_js_1.default)().from(resumeElement).save('resume.pdf');
});
// Shareable link setup (this is an example, you need backend integration for actual URL generation)
var username = 'johnDoe'; // Replace with actual username
var uniqueURL = "https://".concat(username, ".vercel.app/resume"); // Example URL
var shareLinkElement = document.getElementById('shareLink');
shareLinkElement.href = uniqueURL;
// api/saveResume.js
function handler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, username, resume;
        return __generator(this, function (_b) {
            _a = req.body, username = _a.username, resume = _a.resume;
            // Save resume data to a database or file system
            // For demonstration purposes, you could return a static URL
            res.status(200).json({ url: "https://".concat(username, ".vercel.app/resume") });
            return [2 /*return*/];
        });
    });
}
exports.default = handler;
function saveResume(username, resume) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('/api/saveResume', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ username: username, resume: resume }),
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data.url];
            }
        });
    });
}
