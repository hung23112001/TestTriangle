document.addEventListener("DOMContentLoaded", function(){

    const e_edgeA = document.querySelector('.edgeA');
    const e_edgeB = document.querySelector('.edgeB');
    const e_edgeC = document.querySelector('.edgeC');
    const text_valueA = document.querySelector("#result_edgeA");
    const text_valueB = document.querySelector("#result_edgeB");
    const text_valueC = document.querySelector("#result_edgeC");
    const div_formResult = document.querySelector(".form_resultValue");

    var edgeA_value;
    var edgeB_value;
    var edgeC_value;
    div_formResult.style.display = "none";

// Check value A, B, C
    e_edgeA.onkeyup = function(){
        if(typeof(e_edgeA.value) == "undefined" || e_edgeA.value.length == 0 || e_edgeA.value == 0){
            text_valueA.innerHTML = "Cạnh A không hợp lệ";
        }else{
            edgeA_value = e_edgeA.value;
            text_valueA.innerHTML = `Cạnh A = ${edgeA_value} cm`;
        }
    }
    e_edgeB.onkeyup = function(){
        if(typeof(e_edgeB.value) == "undefined" || e_edgeB.value.length == 0 || e_edgeB.value == 0){
            text_valueB.innerHTML = "Cạnh B không hợp lệ";
        }
        else{
            edgeB_value = e_edgeB.value;
            text_valueB.innerHTML = `Cạnh B = ${edgeB_value} cm`;
        }
    }
    e_edgeC.onkeyup = function(){
        if(typeof(e_edgeC.value) == "undefined" || e_edgeC.value.length == 0 || e_edgeC.value == 0){
            text_valueC.innerHTML = "Cạnh C không hợp lệ";
        }
        else{
            edgeC_value = e_edgeC.value;
            text_valueC.innerHTML = `Cạnh C = ${edgeC_value} cm`;
        }
    }
// Check Triangle type
    document.querySelector("#btn_submit").onclick = function(){
        
        const result_Triangle = document.querySelector('.this_is');
        edgeA_value = parseInt(edgeA_value);
        edgeB_value = parseInt(edgeB_value);
        edgeC_value = parseInt(edgeC_value);

        // If this is a triangle then show form result type triangle.
        if( edgeA_value<edgeB_value+edgeC_value && edgeB_value<edgeA_value+edgeC_value && edgeC_value<edgeA_value+edgeB_value ){
            div_formResult.style.display = "block";

            if( edgeA_value*edgeA_value==edgeB_value*edgeB_value+edgeC_value*edgeC_value || 
                edgeB_value*edgeB_value==edgeA_value*edgeA_value+edgeC_value*edgeC_value || 
                edgeC_value*edgeC_value== edgeA_value*edgeA_value+edgeB_value*edgeB_value)
            {
                result_Triangle.innerHTML = "Đây là tam giác vuông";
            }
            else if((edgeA_value==edgeB_value && edgeB_value==edgeC_value) || (edgeA_value==edgeC_value && edgeB_value==edgeC_value)){
                result_Triangle.innerHTML = "Đây là tam giác đều";
            }
            else if(edgeA_value==edgeB_value || edgeA_value==edgeC_value || edgeB_value==edgeC_value){
                result_Triangle.innerHTML = "Đây là tam giác cân";
            }
            else{
                result_Triangle.innerHTML = "Đây là tam giác thường";
            }
        }
        else{
            result_Triangle.innerHTML = "Ba cạnh A, B, C không tạo thành một tam giác";
        }
    }
});
