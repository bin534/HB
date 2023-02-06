<script>
    function activeTab1() {
        document.getElementById('tabIcon1').classList.add("mdui-color-blue-200");
        document.getElementById('tabIcon1').style.padding = "4px 24px";
        document.getElementById('tabIcon2').classList.remove("mdui-color-blue-200");
        document.getElementById('tabIcon2').style.padding = "4px 4px";
        document.getElementById('tabIcon3').classList.remove("mdui-color-blue-200");
        document.getElementById('tabIcon3').style.padding = "4px 4px";
    }

    function activeTab2() {
        document.getElementById('tabIcon3').classList.remove("mdui-color-blue-200");
        document.getElementById('tabIcon3').style.padding = "4px 4px";
        document.getElementById('tabIcon2').classList.add("mdui-color-blue-200");
        document.getElementById('tabIcon2').style.padding = "4px 24px";
        document.getElementById('tabIcon1').classList.remove("mdui-color-blue-200");
        document.getElementById('tabIcon1').style.padding = "4px 4px";
    }

    function activeTab3() {
        document.getElementById('tabIcon3').classList.add("mdui-color-blue-200");
        document.getElementById('tabIcon3').style.padding = "4px 24px";
        document.getElementById('tabIcon2').classList.remove("mdui-color-blue-200");
        document.getElementById('tabIcon2').style.padding = "4px 4px";
        document.getElementById('tabIcon1').classList.remove("mdui-color-blue-200");
        document.getElementById('tabIcon1').style.padding = "4px 4px";
    }
    activeTab1();
</script>
