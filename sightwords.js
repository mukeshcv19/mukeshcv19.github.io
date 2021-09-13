document.getElementById('btn').addEventListener('click', () => {
    updateRandom();
})

function updateRandom() {
    var e = document.getElementById('num');
    var items = ["This", "Is", "Has", "The", "In", "On", "His", "An", "A", "Are", "He", "She", "Has", "We", "Am", "It", "Is", "On", "There", "Are", "In", "The",
        "For", "Me", "My", "And", "They", "In", "Where", "With", "All", "You", "Was", "Him", "Had", "But", "To", "For", "We", "Out", "Her", "So",
        "Am", "Do", "We", "Go", "As", "Is", "In", "Of", "It", "I", "On", "To", "Up", "At", "Leg", "The", "What", "Your", "Why", "Yes",
        "No", "An", "Have", "Has", "Where", "Run"]
    var rand = Math.floor(Math.random() * items.length);
    randItem = items[rand]
    e.innerText = randItem;
}

updateRandom();