var ip = require("ip");

// This sample project does not use the 'isPublic()' function in the 'ip' module.
// As of today CVE-2024-29415 has no patched versions as reported in the GH Security Advisory: https://github.com/advisories/GHSA-2p57-rm9w-gvfp.
// We can use VEX to supress CVE-2024-29415.
console.log(ip.address());
