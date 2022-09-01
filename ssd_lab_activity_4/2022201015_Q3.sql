DELIMITER ;;
CREATE PROCEDURE `NamesandGrades` (in amount INT)
BEGIN
	select CUST_NAME, GRADE from customer where (OPENING_AMT + RECEIVE_AMT) > amount;
END ;;

CALL NamesandGrades("10000");
