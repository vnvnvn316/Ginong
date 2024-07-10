package kr.co.ginong.web.service.order;

import kr.co.ginong.web.entity.order.Location;
import kr.co.ginong.web.entity.order.LocationHistory;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface LocationService {
    Location getByMemberID(Long memberId);

    /* 기본 배송지 외 배송지 목록 */
    List<Location> getListByMemberID(Long memberId);

    Location getByID(Long id);
    LocationHistory getHistoryByOrderID(Long orderId);
    void addHistory(LocationHistory locationHistory);

    Integer removeLocationById(Long locationId);

    Integer addLocation(Location location);

    Integer updateStateById(Long locationId, Long memberId);

    void updateLocation(Location location);

    boolean getStateByID(Long locationId);

    List<Location> getListAllByMemberID(Long memberId);


}
