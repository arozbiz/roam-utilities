const tags = ['c', 'qt', 'obj']; // these are my tags: comment, blockquote, and objection. Use whatever you want and then update the CSS style accordingly

function applyAndHideTag(tags) {
    tags.forEach((tag) => {
        document.querySelectorAll('span[data-tag=' + tag + ']').forEach((node) => {
            if (node.closest('div.roam-block-container').classList.contains(tag + '_tag') == false) { // this check is so that this function only runs when necessary and doesn't cause the mutationObserver to go into an infinite loop
                node.closest('div.roam-block-container').classList.add(tag + '_tag');
                node.parentNode.innerHTML = node.parentNode.innerHTML.replace('</span> ', '</span>'); //since the custom CSS will hide the tag, this gets ready of the resulting leading whitespace
            }
        });
    });
}

const mutationObserver = new MutationObserver(() => applyAndHideTag(tags))

const config = {
    childList: true,
    subtree: true
};

mutationObserver.observe(document.documentElement, config);
