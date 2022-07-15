$(function(){
    $(".mybtn_1").click(function(){
        $(".mainNav").toggleClass("togo");
    })

    // 表单事件绑定
    // $("[name='zipcode']").keyup(checkZipcode);
    // $("[name='zipcode']").change(checkZipcode);

    // $("[name='zipcode']").on("keyup",checkZipcode).on("change",checkZipcode);
    // $["[name='account']"].on("submit",function(){
    //     if(checkZipcode()&&checkPhone()){
    //         // 提交
    //     }
    //     else{
    //         return false;
    //     }
    // });

    $(".num-input").on("keyup",checkNum);
    $(".num-input").on("change",checkNum);
    $(".num-input-plus").on("click",function(){
        $(".num-input").val(1+parseInt($(".num-input").val()));
        checkNum();
    });
    $(".num-input-sub").on("click",function(){
        $(".num-input").val(parseInt($(".num-input").val()-1));
        checkNum();
    });

    $(".three").on("click",function(){
        $(".last-text").addClass("dis_none");
        $(".redstar").toggleClass("dis_none");
    })
    $(".one").on("click",function(){
        // $("#toggle").style.display = "none";
        $(".redstar").addClass("dis_bl");
        $(".redstar").addClass("dis_none");
        $(".last-text").toggleClass("last-text2");
    })
    $(".two").on("click",function(){
        // $("#toggle").style.display = "none";
        $(".redstar").addClass("dis_bl");
        $(".redstar").addClass("dis_none");
        $(".last-text").toggleClass("last-text2");
    })

});

function checkZipcode(){
    var sVal = $(this).val();
    var rZip = /[1-9][0-9]{5}]/ig;
    if(!rZip.test(sVal))
    {
        let oD = $("<div></div>").text("邮政编码不符合格式").attr("class","text-danger");
        $(this).after(oD);
        return false;
    }
    return true;
}

function checkNum(){
    let flag = false;
    let oInput = $(".num-input");
    let sVal = parseInt(oInput.val());
    if(sVal){
        if(sVal < 0){
            oInput.val("0");
        }
        if(sVal > 99){
            oInput.val("99");
        }
        flag = true;
    }
    else{
        oInput.val("0");
        console.log("格式不对");
    }
    return flag;
}

$(function(){
    $.get("/json/img.json",function(date,s){
        $(".box-left").empty();
        for(let i=0;i<date.imgs.length;i++){
            $(".box-left").append($("<div></div>").append($("<a></a>").attr("href",date.links[i]).append($("<img>").attr("src",date.imgs[i])))
        )}
        $(".box-left div").addClass("show");
        $("[name='m']").remove();
        $(".box-mid").append($("<img>").attr("id","bigImg").attr("src",date.firstPages));
        // 绑定事件
        var btn1 = $("<button></button>").addClass("mybtn").addClass("top").text(">");
        var btn2 = $("<button></button>").addClass("mybtn").addClass("but").text(">");
        $(".box-left").append(btn1);
        $(".box-left").append(btn2);
    })
    $(".box-left").click(function(eve){
       $("#bigImg").attr("src",eve.target.parentElement.getAttribute("href"));     
    //    $("#bigImg").attr()
       eve.preventDefault();
    })
})

