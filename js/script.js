var button;
var text_box;
var html_body;
var break_line;
var input
var input_value;
var list_elements;
var list_element;
var current_list_element;
var this_list_element;
var add_list_element;
var update_list_elements;
var ordered_list;
var rename;
var update_button;
var list_of_colors = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine','Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed ', 'Indigo ', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGray', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'RebeccaPurple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen' ];

var current_element;




function random_color(){
        return list_of_colors[
            Math.floor(
                Math.random()*list_of_colors.length)];

}

function attach_element(element_name){
    
    current_element = document.createElement(element_name);
    document.getElementById('content_container').appendChild(current_element);
}


function add_list_element(){
    current_list_element = document.createElement('li');
    ordered_list.appendChild(current_list_element);
}

function update_list_elements(){
    list_elements = ordered_list.childNodes;
}






    document.addEventListener('DOMContentLoaded', function(){
         
         attach_element('input');
         input = current_element;
         
         attach_element('button');
         button = current_element;
         
         button.textContent = 'Click to Add a Color';
         button.id = 'button_left';
         button.addEventListener('click',function(event) {
             
             attach_element('li');
             
             current_element.textContent = String(random_color());
             current_element.style.backgroundColor = current_element.textContent;
             
             current_element.addEventListener('click',function(event) {
                 this.textContent = input.value;
                 this.style.backgroundColor = input.value;
             });
             
             
             ordered_list.appendChild(current_element);
         });
         
         
         
         
         update_button = attach_element('button');
         update_button = current_element;
         
         update_button.id = 'update_button';
         update_button.textContent = 'Update current color';
         
         
         
         attach_element('br');
         break_line = current_element;
  
         
         attach_element('ol');
         ordered_list = current_element;
         ordered_list.id = 'list';
       
         
         
  
    
});   