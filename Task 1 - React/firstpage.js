const firstpage = () => {
    var count1 = React.createElement('h1', {id: 'count1'}, '+200')
    var txt1 = React.createElement('p', {id: 'txt1'}, 'Project completed')
    var div1 = React.createElement('div', {id: 'countTxt1'},[count1, txt1])

    var count2 = React.createElement('h1', {id: 'count1'}, '+50')
    var txt2 = React.createElement('p', {id: 'txt1'}, 'Startup raised')
    var div2 = React.createElement('div', {id: 'countTxt2'},[count2, txt2])

    var countTxt = React.createElement('div', {id: 'countTxt'},[div1, div2])


    var head = React.createElement('h1', {id: 'head'}, 'Hello')
    var txt3 = React.createElement('p', {id: 'txt3'}, '-It`s D.Nova a design wizerd')
    var name = React.createElement('div', {id: 'name'}, [head,txt3])


    var scroll = React.createElement('p', {id: 'scroll'}, 'Scroll down')
    var icon = React.createElement('i', {className: 'ri-arrow-down-line'})
    var scrollDown = React.createElement('div', {id: 'scrollDown'}, [scroll, icon])

    var img = React.createElement('img', {src: './img.png'})

    var txt4 = React.createElement('p', {id: 'txt4'}, '2024')
    var hr = React.createElement('hr', {id: 'hr'})
    var txt5 = React.createElement('p', {id: 'txt5'}, 'Product designer')
    var sideTxt = React.createElement('div', {id: 'sideTxt'}, [txt4, hr, txt5])

    var main = React.createElement('div', {id: 'main'}, [countTxt, name, scrollDown,  img, sideTxt])
    return main
}
export default firstpage