// function to create svg bar graph
function createSVGBargraph(values,buildingColor, waterColor) {
    // calculate the width and height of the svg
    // var originalWidth = values.length * barWidth;
    // var originalHeight = Math.max(...values);
    // var windowWidth = window.innerWidth;
    // var windowHeight = window.innerHeight;
    // var scaleX = windowWidth / originalWidth
    // var scaleY = windowHeight / originalHeight
    // var scale = Math.min(scaleX,scaleY);
    // var newWidth = originalWidth * scale;
    // var newHeight = originalHeight * scale;
    var width = window.innerWidth
    var barWidth = width / values.length;
    var height = Math.max(...values) 
    var newHeight = window.innerHeight/ height
    // var newHeight = scaleY * height

    // create svg
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", newHeight);
    console.log(width, height, newHeight)
   let x = 0
   let y = []
   let z=[]
   let prev

    // create rectangles for each bar
    for (var i = 0; i < values.length; i++) {
        
        if(values[i] === 0){
            z.push(prev)
        }else if(values[i] > x){
            z.push(prev)
            prev = values[i]
            x = values[i]
        }else if(values[i] < x){
            z.push(0)
            prev = values[i]
        }

        var bar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        // rect.setAttribute("x", i * barWidth);
        bar.setAttribute("x", i * barWidth);
        bar.setAttribute("y", newHeight - (values[i]*height) );
        bar.setAttribute("width", barWidth);
        bar.setAttribute("height", (values[i]*height));
        bar.setAttribute("fill", buildingColor);
        // append rect to svg
        svg.appendChild(bar);


        var water = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        // rect.setAttribute("x", i * barWidth);
        water.setAttribute("x", i * barWidth);
        water.setAttribute("y", newHeight);
        water.setAttribute("width", barWidth);
        water.setAttribute("height", waterheight);
        water.setAttribute("fill", waterColor);

        // append rect to svg
        svg.appendChild(water);
        
    }
 
    // append svg to viewbox
    document.body.appendChild(svg);

    // return svg for future reference
    return svg;
}
// example usage
var svg = createSVGBargraph([0,4,0,0,0,6,0,6,4,0], "grey", "lightblue");



