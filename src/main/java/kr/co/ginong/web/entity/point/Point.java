package kr.co.ginong.web.entity.point;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Point {
    private long	id;
    private String 	name;
    private Date	date;
    private int	    cost;
    private String 	detail;
    private boolean	state;
    private long	memberId;

}
