/*
Three ways to define functions:
1. function declaration
2. function expression
3. arrow function

FUNCTION DECLARATION
        function foo() {
            return 'bar';
        }
-- function name is foo

FUNCTION EXPRESSION
        const foo = function() {
            return 'bar';
        }
-- right of = called function expression
-- function expression know as ANONYMOUS FUNCTION (no name like 
   function declaration)
-- anonymous function assigned to variable foo
-- invoked by foo()

ARROW FUNCTION
        const add = (parameter1, parameter2) =>
        parameter1 + parameter2;
        add(2,3); //log 5
-- can be a single line
-- declare value and assign anonmyous function
-- don't need {} for single expression
-- IMPLICIT RETURNS for single expression
*/

const divide = function() {
    return 2000 / 100;
};

const square = x => x * x;

const add = (x, y) => x + y;