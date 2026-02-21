const navbar = () => {
    var logo = React.createElement('img', {src: 'https://cdn.prod.website-files.com/6887bbbd362fae74a6532869/6887bbbd362fae74a65328f7_Logo.svg', id: 'logo', alt:'Logo'})
    var a1 = React.createElement('a', {href:'#', id :'nav-about Me'} , 'About Me')
    var a2 = React.createElement('a', {href:'#',id :'nav-portfolio'} , 'Portfolio')
    var a3 = React.createElement('a', {href:'#',id :'nav-services'} , 'Services')
    var a4 = React.createElement('a', {href:'#',id :'nav-blog'} , 'Blog')
    
    var div1 = React.createElement('div', {id : 'nav-start'} , [logo, a1,a2,a3,a4,a5])

    var a5 = React.createElement('a', {href:'#',id :'call'} , 'Book A Call')
    var icon = React.createElement('i', {className: "ri-arrow-right-up-line", style: {fontSize: '22px'}})
    var div2 = React.createElement('div', {id : 'nav-end'} , [a5,icon])

    var div = React.createElement('div', {id : 'nav'} , [div1,div2]) 

    return div;
}
    
export default navbar                            