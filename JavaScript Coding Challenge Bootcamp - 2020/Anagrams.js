function buildeObj(str) {
  let obj = {};
  for (const ch of str) {
    if (obj[ch]) {
      obj[ch] += 1;
    } else {
      obj[ch] = 1;
    }
  }
  return obj;
}
function isAnagrams(str1, str2) {
  let s1 = str1.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let s2 = str2.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let o1 = buildeObj(s1);
  let o2 = buildeObj(s2);

  if (Object.keys(o1).length != Object.keys(o2).length) {
    return false;
  }

  for (const key in o1) {
    if (o1[key] != o2[key]) {
      return false;
    }
  }

  return true;
}


function isAnagrams_with_buildin_fn(str1, str2) {
    let s1 = str1.replace(/[^a-zA-Z0-9]/g, "").split('').sort().join('');
    let s2 = str2.replace(/[^a-zA-Z0-9]/g, "").split('').sort().join('');

    return s1 == s2;
}

console.log(isAnagrams("rail safety", "fairy tales"));
console.log(isAnagrams_with_buildin_fn("rgggail safety", "fairy tales"));