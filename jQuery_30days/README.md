# 30 Days To Learn jQuery
팀 내의 개발자의 추천으로 동영상을 보게되었다.<br>
영상(YouTube) : [30 Days To Learn jQuery](https://www.youtube.com/playlist?list=PL-EWM1MTD1VzGv1w5tLrK2dVCpGnH2SYo)<br>
코드(CODEPEN) : https://codepen.io/collection/AVpkYe/

## 목차
1. [Hello jQuery](#1-hello-jquery)
2. [Not So Fast](#2-not-so-fast)
3. [The Basics of Querying the Dom](#3-the-basics-of-querying-the-dom)
4. [Events 101](#4-events-101)
5. [Events 201](#5-events-201)
6. [Bind Live Delegate Huh](#6-bind-live-delegate-huh)
7. [Creating and Appending Content to DOM](#7-creating-and-appending-content-to-dom)
8. [Effects and Structure](#8-effects-and-structure)
9. [The this keyword](#9-the-this-keyword)
10. [Modifying Effect Speeds](#10-modifying-effect-speeds)
11. [Creating Custom Effect Methods](#11-creating-custom-effect-methods)
12. [Full Control With The Animate Method](#12-full-control-with-the-animate-method)
13. [Homework Solution](#13-homework-solution)
14. [The Obligatory Slider](#14-the-obligatory-slider)
15. [Prototypal Inheritance and Refactoring the Slider](#15-prototypal-inheritance-and-refactoring-the-slider)
16. [QA](#16-qa)
17. [jQuery Each and Templating](#17-jquery-each-and-templating)
18. [Say Hello To Handlebars](#18-say-hello-to-handlebars)
19. [Templating and Twitter](#19-templating-and-twitter)
20. [jQuery grep](#20-jquery-grep)
21. [Custom Events and The Observer Pattern](#21-custom-events-and-the-observer-pattern)
22. [The Load Method](#22-the-load-method)
23. [Communicating With The Server Side](#23-communicating-with-the-server-side)
24. [PHP and jQuery Part 1](#24-php-and-jquery-part-1)
25. [PHP and jQuery Part 2](#25-php-and-jquery-part-2)
26. [Deferreds](#26-deferreds)
27. [Head First Into Plugin Development](#27-head-first-into-plugin-development)
28. [goodbye](#28-goodbye)

## 1. Hello jQuery
### 1.1 스크립트의 위치
브라우저는 문서를 파싱하는 도중 \<script>를 만나게 되면, 즉시 파싱하고 실행하려 한다. <br>
이 때, 스크립트가 실행되는 동안 문서의 파싱은 중단 된다.

스크립트가 외부에 있는 경우에도 필요한 자원을 로드할 때까지 파싱은 중단 된다.

#### 1.1.1 \<head> 요소 안에 삽입
- 스크립트가 실행되면 문서의 파싱이 중단 되고, 실행이 끝날때까지 완성되는 않은 화면을 보여주게 된다.<br>
- 문서의 DOM구조가 필요한 경우, 로드 이벤트가 추가되어야 에러없이 동작한다.
 
#### 1.1.2 \</body> 태그 앞에 삽입
- 스크립트가 문서의 파싱이 중단 되지 않고, 화면을 보여주고 난 뒤 실행된다.<br>
- 문서의 파싱이 완료되어, 로드 이벤트와 같은 추가설정이 필요 없다.

### 1.2 구조/표현/동작을 분리
영상의 예로 들면
jQuery('ul li').css('color','green') 보다는 css 클래스를 사용하여 스타일을 만들고,<br>
jQuery('ul li').addClass('emphasis')와 같이 클래스를 추가시키는 방법을 사용하자.

### 1.3 jQuery? $?
jQuery.js에서 아래와 같이 처리해주고 있어 사용은 동일하다. <br>
window.jQuery = window.$ = jQuery;

- window.jQuery
- window.$
- jQuery
- $

### 1.4 google CDN 사용
강좌에서는 google CDN 사용을 권장하였다. <br>
https://developers.google.com/speed/libraries/#jquery

## 2. Not So Fast

## 3. The Basics of Querying the Dom

## 4. Events 101

## 5. Events 201

## 6. Bind Live Delegate Huh

## 7. Creating and Appending Content to DOM

## 8. Effects and Structure

## 9. The this keyword

## 10. Modifying Effect Speeds

## 11. Creating Custom Effect Methods

## 12. Full Control With The Animate Method

## 13. Homework Solution

## 14. The Obligatory Slider

## 15. Prototypal Inheritance and Refactoring the Slider

## 16. QA

## 17. jQuery Each and Templating

## 18. Say Hello To Handlebars

## 19. Templating and Twitter

## 20. jQuery grep

## 21. Custom Events and The Observer Pattern

## 22. The Load Method

## 23. Communicating With The Server Side

## 24. PHP and jQuery Part 1

## 25. PHP and jQuery Part 2

## 26. Deferreds

## 27. Head First Into Plugin Development

## 28. goodbye