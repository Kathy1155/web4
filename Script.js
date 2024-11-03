$(document).ready(function() {
    // 檢查問題是否已回答
    window.nextStep = function(step) {
        let isValid = false;
        let error = document.getElementById('error' + step);
        error.style.display = 'none'; // 隱藏錯誤信息

        if (step === 1) {
            const fearLevel = document.getElementById('fear-level').value;
            if (fearLevel !== "") {
                isValid = true;
            }
        } else if (step === 2) {
            const fluYes = document.getElementById('flu-yes').checked;
            const fluNo = document.getElementById('flu-no').checked;
            if (fluYes || fluNo) {
                isValid = true;
            }
        } else if (step === 3) {
            const covidYes = document.getElementById('covid-yes').checked;
            const covidNo = document.getElementById('covid-no').checked;
            if (covidYes || covidNo) {
                isValid = true;
            }
        }

        // 如果通過驗證，顯示下一題
        if (isValid) {
            $("#step" + step).slideUp(function() {
                $("#step" + (step + 1)).slideDown();
            });
        } else {
            error.style.display = 'block'; // 顯示錯誤信息
        }
    }

    // 返回上一題
    window.prevStep = function(step) {
        $("#step" + step).slideUp(function() {
            $("#step" + (step - 1)).slideDown();
        });
    }

    // 顯示總結
    window.showSummary = function() {
        const mostPainful = document.getElementById('most-painful').value;
        const error = document.getElementById('error4');
        error.style.display = 'none'; // 隱藏錯誤信息

        if (mostPainful.trim() !== "") {
            // 收集所有的回答
            const fearLevel = document.getElementById('fear-level').value;
            const flu = document.querySelector('input[name="flu"]:checked').value;
            const covid = document.querySelector('input[name="covid"]:checked').value;

            // 顯示總結
            const summaryText = `
                <strong>害怕打針的指數：</strong> ${fearLevel}<br>
                <strong>是否打過流感疫苗：</strong> ${flu === 'yes' ? '是' : '否'}<br>
                <strong>是否打過 COVID-19 疫苗：</strong> ${covid === 'yes' ? '是' : '否'}<br>
                <strong>打過最痛的針是：</strong> ${mostPainful}
            `;
            document.getElementById('summary').innerHTML = summaryText;

            // 顯示總結步驟
            $("#step4").slideUp(function() {
                $("#step5").slideDown();
            });
        } else {
            error.style.display = 'block'; // 顯示錯誤信息
        }
    }

    // 返回修改
    window.goBack = function() {
        $("#step5").slideUp(function() {
            $("#step4").slideDown();
        });
    }

    // 提交表單
    window.submitForm = function() {
        alert('表單已提交！');
        // 在這裡可以添加真正的表單提交邏輯
    }
});
