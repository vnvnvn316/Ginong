package kr.co.ginong.web.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductImg {
    private long    id;
    private String  name;
    private String  imgPath;
    private long    productId;
}