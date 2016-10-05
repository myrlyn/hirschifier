var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/common core/gi, 'All Ur Fancy Countin\'');
            replacedText = replacedText.replace(/baby boomers/gi, 'mole people');
            replacedText = replacedText.replace(/baby boomer/gi, 'mole person');
			replacedText = replacedText.replace(/hipster/gi, 'cyborg');
            replacedText = replacedText.replace(/participation trophy/gi, 'Q-36 space modulator');
            replacedText = replacedText.replace(/trophy just for participating/gi, 'Q-36 space modulator');
            replacedText = replacedText.replace(/generation x/gi, 'The X-Men');
			replacedText = replacedText.replace(/generation-x/gi, 'The X-Men');
			replacedText = replacedText.replace(/gen-x/gi, 'The X-Men');
			replacedText = replacedText.replace(/gen x/gi, 'The X-Men');
			replacedText = replacedText.replace(/gen x-er/gi, 'X-man');
			replacedText = replacedText.replace(/generation x-er/gi, 'X-man');
			replacedText = replacedText.replace(/gen xer/gi, 'X-man');
			replacedText = replacedText.replace(/generation xer/gi, 'X-man');
            replacedText = replacedText.replace(/revolution/gi, 'revolutionPlaceHolderThingy');
            replacedText = replacedText.replace(/war on christmas/gi, 'waronxmasPlaceHolderThingy');
            replacedText = replacedText.replace(/waronxmasPlaceHolderThingy/gi, 'the revolution');
            replacedText = replacedText.replace(/revolutionPlaceHolderThingy/gi, 'war on Christmas');
            replacedText = replacedText.replace(/donald.?trump/gi, 'Presidential Candidate and human tire-fire, Donald Trump');
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
