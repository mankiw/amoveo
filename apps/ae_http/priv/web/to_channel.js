var to_channel_div = document.createElement("div");
document.body.appendChild(to_channel_div);
function to_channel1() {
    to_channel_div.appendChild(document.createElement("br"));
    to_channel_div.appendChild(document.createElement("br"));
    var inc1 = document.createElement("INPUT");
    inc1.setAttribute("type", "text"); 
    var input_info = document.createElement("h8");
    input_info.innerHTML = "you pay: ";
    to_channel_div.appendChild(input_info);
    to_channel_div.appendChild(inc1);
    
    var inc2 = document.createElement("INPUT");
    inc2.setAttribute("type", "text"); 
    var amount_info = document.createElement("h8");
    amount_info.innerHTML = "server pays: ";
    to_channel_div.appendChild(amount_info);
    to_channel_div.appendChild(inc2);
    
    var spend_button = document.createElement("BUTTON");
    spend_button.id = "spend_button";
    var spend_button_text = document.createTextNode("pay money into channel");
    spend_button.appendChild(spend_button_text);
    spend_button.onclick = function() {
	var b1 = parseInt(inc1.value, 10);
	var b2 = parseInt(inc2.value, 10);
	local_get(["grow_channel", IP, Port, b1, b2]);
	local_get(["sync", IP, Port]);
    };
    to_channel_div.appendChild(spend_button);

}
