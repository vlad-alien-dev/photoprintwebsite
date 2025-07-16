export function createObjectURLFromInput(inputId, index) {
    const input = document.getElementById(inputId);
    if (input && input.files && input.files.length > index) {
        return URL.createObjectURL(input.files[index]);
    }
    return null;
}
