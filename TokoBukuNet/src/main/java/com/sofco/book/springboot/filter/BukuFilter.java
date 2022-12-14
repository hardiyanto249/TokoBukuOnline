package com.sofco.book.springboot.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;

@Component
public class BukuFilter implements Filter{
	
	  @Override
	  public void doFilter(
	      ServletRequest servletRequest,
	      ServletResponse servletResponse,
	      FilterChain filterChain) throws IOException, ServletException {
		  	HttpServletResponse response = (HttpServletResponse) servletResponse;
		  	response.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
		  	response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE, PATCH");
		  	response.setHeader("Access-Control-Max-Age", "3600");
		  	response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		  	response.setHeader("Access-Control-Expose-Headers", "Location");
		  	filterChain.doFilter(servletRequest, servletResponse);
	  	  }
	  
	    @Override
	    public void init(FilterConfig filterConfig) {}

	    @Override
	    public void destroy() {}
	  
}
