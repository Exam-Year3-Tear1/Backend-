package exam.example.examterm1.services;

import exam.example.examterm1.dto.CalcResponse;
import exam.example.examterm1.dto.DoMathRequest;
import exam.example.examterm1.dto.InvalidOperationException;

@Service
public class MathOperatorImpl implements MathOperator {
    DoMathRequest doMathRequest;

    @Override
    public double doMath(DoMathRequest doMathRequest) throws InvalidOperationException {
        if("/".equals(doMathRequest.getOperation()) && doMathRequest.getOperand2() == (double) 0){
            throw new InvalidOperationException("Cannot divide by 0");
        }

        switch (doMathRequest.getOperation()) {
            case "*":
                return doMathRequest.getOperand1() * doMathRequest.getOperand2();
            case "/":
                return doMathRequest.getOperand1() / doMathRequest.getOperand2();
            case "-":
                return doMathRequest.getOperand1() - doMathRequest.getOperand2();
            case "**":
                return Math.pow(doMathRequest.getOperand1(), doMathRequest.getOperand2());
            case "log":
                return doMathRequest.getOperand1() * Math.log10(doMathRequest.getOperand2());
            case "ln":
                return doMathRequest.getOperand1() * Math.log(doMathRequest.getOperand2());
            default:
                System.out.println("Unkown Operation");
        }
    }


}
