varr = "X";
numberr = 0;
stk =[];
main = ["A","B","C","A","B","C"];
side = [1,2,3,1,2,3];

mainn();

function mainn() {
    $(".Icon").one("click",function(){
        var location=this.id;
        console.log("clicked " + location);
        if(stk.includes(location + "X") || stk.includes(location + "O")) {
            null;
        }
        else {
        boxClicked(location,varr);
        stk.push(location + varr);
        console.log(stk);
        }

    })

$(".Icon").one("click",function(){
    if (varr =="X") {
        varr = "O";
        $("h3").text("Player O's Turn!");
        Check("X");
    }
    else if (varr == "O") {
        varr = "X";
        $("h3").text("Player X's Turn!");
        Check("O");
    }
    boxClicked(location,varr);
})


function Check(varr) {
    for (var i=0;i<3;i++) {
            if (stk.includes(main[i] + side[i] + varr) && stk.includes(main[i] + side[i+1] + varr) && stk.includes(main[i] + side[i+2] + varr) || stk.includes(main[i] + side[i] + varr) && stk.includes(main[i+1] + side[i] + varr) && stk.includes(main[i+2] + side[i] + varr) || stk.includes("A1" + varr) && stk.includes("B2" + varr) && stk.includes("C3" + varr) || stk.includes("A3" + varr) && stk.includes("B2" + varr) && stk.includes("C1" + varr)) {
                $("h1").text(varr + " is the Winner!");
                $("h3").text("Press any key to restart!");
                $(".Icon").off("click");
                $(document).on("keypress", function(){
                    location.reload(true);
                    })
                }
            else if(numberr>=9){
                Check("O");
                Check("X");
                $("h1").text("Draw!");
                $("h3").text("Press any key to restart!");
                $(document).on("keypress", function(){
                    location.reload(true);
                })
            }
        }
    }
mainn();
}

function boxClicked(location,xoro){
    
    
    console.log('#'+location+xoro);
    $('#'+location+xoro).show();
    $("#" + location).off("click");
    numberr+=1;

}

