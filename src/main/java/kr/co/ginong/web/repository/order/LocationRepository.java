package kr.co.ginong.web.repository.order;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import kr.co.ginong.web.entity.order.Location;
import kr.co.ginong.web.entity.order.LocationHistory;


@Mapper
public interface LocationRepository {
    List<Location> findAll(Long memberId);

    Location findById(Long id);

    Location findByMemberId(long memberId);

    List<Location> findListByMemberId(Long memberId);

    LocationHistory findByOrderId(long orderId);

    void save(Location location);
    boolean saveHistory(LocationHistory locationHistory);
    void delete(long id);

    void updateLocationByMemberId(Location updatedLocationInfo);

    int count(Long categoryId, String query);

    int deleteLocation(Long locationId);

    int insertLocation(Location location);

    int updateStateById(Long locationId, Long memberId);

    void updateStateAll(Long memberId);

    int updateLocation(Location location);

    boolean findStateById(Long locationId);
}
