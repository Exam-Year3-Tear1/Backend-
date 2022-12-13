package exam.example.examterm1.dto;

public class DoMathRequest {
    private double operand1;
    private double operand2;
    private String operation;

    public DoMathRequest(){}

    public DoMathRequest(double operand1, double operand2, java.lang.String operation) {
        this.operand1 = operand1;
        this.operand2 = operand2;
        this.operation = operation;
    }

    public double getOperand1() {
        return operand1;
    }

    public void setOperand1(double operand1) {
        this.operand1 = operand1;
    }

    public double getOperand2() {
        return operand2;
    }

    public void setOperand2(double operand2) {
        this.operand2 = operand2;
    }

    public java.lang.String getOperation() {
        return operation;
    }

    public void setOperation(java.lang.String operation) {
        this.operation = operation;
    }
}
