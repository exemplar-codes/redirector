const queryParams = new URLSearchParams(document.location.search);
const redirectValue = decodeURI(queryParams.get("redirect"));
obsidian://advanced-uri?vault=dsa&filepath=home%25252F4_resource_itineraries%25252F5-CLRS%25252F4-Advanced-Design-and-Analysis-Techniques%25252F16-Greedy-Algorithms.md
window.location.href = redirectValue;
