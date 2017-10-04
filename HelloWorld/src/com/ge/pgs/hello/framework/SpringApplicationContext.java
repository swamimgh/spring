package com.ge.pgs.hello.framework;
import org.springframework.context.ApplicationContext;



public final class SpringApplicationContext {
	
	private static ApplicationContext ctx = null;

	/**
	 * @Author:
	 * @param applicationContext
	 * @Description: Injected from the class "ApplicationContextProvider" which
	 *               is automatically. loaded during Spring-Initialization.
	 * 
	 */
	public static void setApplicationContext(
			ApplicationContext applicationContext) {
		ctx = applicationContext;
	}

	/**
	 * @Author:
	 * @return
	 * @Description:Get access to the Spring ApplicationContext from everywhere
	 *                  in your Application.
	 */
	public static ApplicationContext getApplicationContext() {
		return ctx;
	}
	
	private SpringApplicationContext(){
		
	}
	
	public static Object getBean(String beanName) {
		return ctx.getBean(beanName);
	}
}
