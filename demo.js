function getStringByteSize(str) {
    const encoder = new TextEncoder();
    const encodedString = encoder.encode(str);
    return encodedString.length; // Returns the byte size
}

// Example usage:
const exampleString = "111111111111111111111111111111111111111111111111111111111111111111111111";
console.log(getStringByteSize(exampleString));