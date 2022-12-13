package exam.example.examterm1.controller;

import exam.example.examterm1.dto.DoMathRequest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;

@RunWith(springRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class MathControllerIntegrationTest {
    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void calculate_success(){
        DoMathRequest info = new DoMathRequest(1, 4, "+");
        ResponseEntity<DoMathRequest> data = this.restTemplate.getForEntity("/calculator", info);

        assertTrue(data.getStatusCode().is2xxSuccessful());
        assertEquals(5), data.getMessage();
        assertEquals("Item not found", data.getBody().getMessage())
    }

}
