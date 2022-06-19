const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');
const postTabs = $$('.tab-post-item');
console.log("🚀 ~ file: mycode.js ~ line 7 ~ const postTabs = $$('.tab-post-item');", const postTabs = $$('.tab-post-item');
const postPanes = $$('.tab-post-pane');
console.log("🚀 ~ file: mycode.js ~ line 9 ~ const postPanes = $$('.tab-post-pane');", const postPanes = $$('.tab-post-pane');)

const tabActive = $('.tab-item.active');
const tabPostActive = $('.tab-post-item.active');

const line = $('.tabs .line');

line.style.left = tabActive.offsetLeft + "px"
line.style.width = tabActive.offsetWidth + "px"

tabs.forEach((tab, index) => {
    const pane = panes[index]
    tab.onclick = function(){

        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')

        line.style.left = this.offsetLeft + "px"
        line.style.width = this.offsetWidth + "px"

        this.classList.add('active')
        pane.classList.add('active')
    }
})
postTabs.forEach((postTab, index) => {
    const postPanes = postPanes[index]
    postTab.onclick = function(){

        $('.tab-post-item.active').classList.remove('active')
        $('.tab-post-pane.active').classList.remove('active')

        this.classList.add('active')
        postPanes.classList.add('active')
    }
})
