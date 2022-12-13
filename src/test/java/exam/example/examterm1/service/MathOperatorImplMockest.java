package exam.example.examterm1.service;

import exam.example.examterm1.dto.CalcResponse;
import exam.example.examterm1.dto.DoMathRequest;
import exam.example.examterm1.dto.InvalidOperationException;
import exam.example.examterm1.services.MathOperator;
import exam.example.examterm1.services.MathOperatorImpl;
import org.mockito.junit.MockitoJUnitRunner;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class MathOperatorImplMockest {
    @InjectMocks
    MathOperatorImpl mathOperator;

    @Mock
    private MathOperator mathOperatorMock;

    @Test
    public void Operation_on_many_Element() throws InvalidOperationException {
        DoMathRequest request = new DoMathRequest(1, 4, "+");
        when(mathOperatorMock.doMath(request)).thenReturn(new CalcResponse(5));
        assertEquals(5, mathOperator.doMath(request));
    }

    @Test
    public void Operation_on_Invalid_operation() {
        DoMathRequest request = new DoMathRequest(1,7, "");
        when(mathOperatorMock.doMath(request)).thenReturn(new int[] {});
        assertEquals(0, mathOperator.doMath(request));
    }

}
