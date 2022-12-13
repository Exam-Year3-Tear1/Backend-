package exam.example.examterm1.Controller;

import exam.example.examterm1.dto.CalcResponse;
import exam.example.examterm1.dto.DoMathRequest;
import exam.example.examterm1.services.MathOperator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/calculator")
public class MathController {
    @Autowired
    private MathOperator mathOperator;
    CalcResponse response;

    @PostMapping("/")
    public CalcResponse doMathMap(@RequestBody DoMathRequest doMathRequest){
        double res = MathOperator.doMath(doMathRequest);
        response.setCalcResponse(res);
        return response;
    }
}
