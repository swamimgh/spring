package com.ge.pgs.hello.framework;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

public class SpringApplicationContextProvider implements ApplicationContextAware {
	
	/*
	 * (non-Javadoc)
	 * 
	 * @see org.springframework.context.ApplicationContextAware#setApplicationContext(org.springframework.context.ApplicationContext)
	 */
	public void setApplicationContext(ApplicationContext ctx)
			throws BeansException {
		// Wiring the ApplicationContext into a static method
		SpringApplicationContext.setApplicationContext(ctx);
	} 

}
