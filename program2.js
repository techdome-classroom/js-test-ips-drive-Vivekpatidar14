function longestSubstring(s) {
    let maxLength = 0; 
    let start = 0; 

  
    const charMap = new Map();

  
    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        // If the current character is already in the map and its index is greater than or equal to the start index,
        // update the start index to the index after the last occurrence of the character
        if (charMap.has(currentChar) && charMap.get(currentChar) >= start) {
            start = charMap.get(currentChar) + 1;
        }

        // Update the last index of the current character in the map
        charMap.set(currentChar, end);

        // Update the maximum length of the substring
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

module.exports = { longestSubstring };

