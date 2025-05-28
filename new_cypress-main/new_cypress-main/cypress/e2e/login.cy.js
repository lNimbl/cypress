describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio'); // Зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // Нажал войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Текст после успешной авторизации
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
    })
    

    it('Восстановление пароля', function () {
         cy.visit('https://login.qa.studio'); // Зашли на сайт
         cy.get('#forgotEmailButton').click() // Нажал на забыли пароль
         cy.get('#mailForgot').type('german@dolnikov.ru') // Ввели любую почту
         cy.get('#restoreEmailButton').click() // Нажал на отправить код

         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Текст после отправки кода
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
    })


    it('НЕправильный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio'); // Зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio12'); // Ввели НЕверный пароль
         cy.get('#loginButton').click(); // Нажал войти

         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Текст после неудачной авторизации
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
    })


    it('Верный пароль и НЕправильный логин', function () {
         cy.visit('https://login.qa.studio'); // Зашли на сайт
         cy.get('#mail').type('germa@dolnikov.ru'); // Ввели НЕправильный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // Нажал войти

         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Текст после неудачной авторизации
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
    })


    it('Проверка валидации', function () {
         cy.visit('https://login.qa.studio'); // Зашли на сайт
         cy.get('#mail').type('germadolnikov.ru'); // Ввели НЕправильный логин без @
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // Нажал войти

         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Текст после неудачной авторизации
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
    })
    
    
    it('Проверка на приведение к строчным буквам в логине', function () {
         cy.visit('https://login.qa.studio'); // Зашли на сайт
         cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин с разными строчными буквами
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // Нажал войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Текст после неудачной авторизации
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
    })


    // Автотест для Покемонов
    describe('Автотест для Покемонов', function () {

    it('Покупка нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.ru/login'); // Зашел на сайт покемонов
         cy.get('#k_email').type('USER_LOGIN'); // Ввел верную почту
         cy.get('#k_password').type('USER_PASSWORD'); // Ввел верный пароль
         cy.get('.MuiButton-root').click(); // Нажал войти
         cy.get('.header_card_trainer').click(); // Нажал на профиль
         cy.get('.k_mobile > :nth-child(5)').click(); // Нажал на смену аватара 
         cy.get(':nth-child(1) > .shop__button').click(); // Нажать на кнопку КУПИТЬ Аватар тренера №1
         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4620869113632996'); // Вводим номер карты
         cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125'); // вводим CVV карты
         cy.get(':nth-child(1) > .style_1_base_input').type('1226'); // вводим срок действия карты
         cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('MKS'); // вводим имя владельца действия
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // Нажимаем оплатить 
         cy.get('.style_1_base_input').type('56456'); // Вводим код подтверждения СМС
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // Нажимаем кнопку оплатить
         cy.get('.payment_status_top_title').contains('Покупка прошла успешно'); // Сообщение об удачной покупке
         cy.get('.payment_status_top_title').should('be.visible'); // Текст виден пользователю
     })
 }) 
 }) 
