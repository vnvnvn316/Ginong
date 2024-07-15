# OpenJDK 베이스 이미지 사용
FROM openjdk:17-jdk-slim

# 작업 디렉토리 설정
WORKDIR /app

# .war 파일을 컨테이너로 복사
COPY target/web-0.0.1-SNAPSHOT.war /app/web.war

# 포트 설정
EXPOSE 9090

# 애플리케이션 실행
ENTRYPOINT ["java", "-Dspring.profiles.active=dev", "-jar", "/app/web.war"]
