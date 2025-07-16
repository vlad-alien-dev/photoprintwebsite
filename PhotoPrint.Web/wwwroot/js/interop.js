export function createObjectURLFromInput(inputId) {
    const input = document.getElementById(inputId);
    if (!input || !input.files || input.files.length === 0) {
        throw new Error("File input not found or no file selected");
    }
    const file = input.files[0];
    return URL.createObjectURL(file);
}