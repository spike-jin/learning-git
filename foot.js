        // 返回顶部功能
        const backToTopBtn = document.getElementById('backToTopBtn');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // 汉堡菜单功能
        document.querySelector('.hamburger').addEventListener('click', () => {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
        // 计算器功能
        document.getElementById('calorieForm').addEventListener('submit', function(e) {
            e.preventDefault(); // 防止表单提交刷新页面
    
            const activity = document.getElementById('activity').value;
            const duration = parseFloat(document.getElementById('duration').value);
            const weight = parseFloat(document.getElementById('weight').value);
    
            if (!activity || isNaN(duration) || isNaN(weight)) {
                document.getElementById('result').innerText = '请填写所有字段。';
                return;
            }
    
            // 每公斤体重每小时消耗的大致热量（千卡）
            const MET = {
                walking: 3.5,
                running: 7,
                cycling: 6,
                swimming: 8,
                gym: 5
            };
    
            const caloriesPerHour = MET[activity] * weight;
            const caloriesBurned = (caloriesPerHour / 60) * duration;
    
            document.getElementById('result').innerText = `您在 ${duration} 分钟的 ${document.getElementById('activity').options[document.getElementById('activity').selectedIndex].text} 中大约消耗了 ${caloriesBurned.toFixed(1)} 千卡的热量。`;
        });
            // 计算器功能
            function calculateBMI() {
                const weight = parseFloat(document.getElementById('weight').value);
                const cm = parseFloat(document.getElementById('height').value); // 获取厘米值
                let resultText;
        
                if (isNaN(weight) || isNaN(cm) || cm <= 0) {
                    resultText = '请输入有效的体重和身高';
                } else {
                    const height = cm / 100; // 转换为米
                    const bmi = weight / (height * height);
        
                    if (bmi < 18.5) {
                        resultText = `BMI: ${bmi.toFixed(1)}（偏瘦）`;
                    } else if (bmi < 24) {
                        resultText = `BMI: ${bmi.toFixed(1)}（正常）`; 
                    } else if (bmi < 28) {
                        resultText = `BMI: ${bmi.toFixed(1)}（超重）`;
                    } else {
                        resultText = `BMI: ${bmi.toFixed(1)}（肥胖）`;
                    }
                }
        
                document.getElementById('result').textContent = resultText;
            }