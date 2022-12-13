package exam.example.examterm1.controller;

import exam.example.examterm1.Controller.MathController;
import exam.example.examterm1.dto.DoMathRequest;
import exam.example.examterm1.services.MathOperator;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@WebMvcTest(MathController.class)
public class MathControllerUnitTest {
    @MockBean
    private MathOperator mathOperatorMock;

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void Post_success() throws Exception{
        DoMathRequest data = new DoMathRequest(1, 3, "+");
        ResponseEntity.status(HttpStatus.CREATED).body(data);

        ResponseEntity<?> response= ResponseEntity.status(HttpStatus.CREATED).body(data);
        when(mathOperatorMock.doMath(data));

        MockHttpServletRequestBuilder request= MockMvcRequestBuilders.get("/calculator").accept(MediaType.APPLICATION_JSON);

        MvcResult result =mockMvc.perform(request).andExpect(status().isNotFound()).andExpect(content().json("{\"status\":false,\"message\":\"Item not found\"}")).andReturn();
    }
}
