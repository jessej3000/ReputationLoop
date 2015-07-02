<div style="padding-left:200px;padding-right:200px">
    <div class="row">
        <div class="col-md-6">
            <div class="logo" data-margin-right="0px" data-margin-left="0px" data-margin-top="20px" data-margin-bottom="20px" style="margin-right:0px;margin-top:20px;margin-left:0px;margin-bottom:20px;">
                <a href="https://www.reputationloop.com">
                    <img src="https://www.reputationloop.com/wp-content/uploads/2014/09/RepLoop-FeedbackTagOL-white_260x49.png" alt="Reputation Loop" class="normal_logo">
                </a>
            </div>
        </div>
        <div class="col-md-6" style="padding-top:20px">
            <div class="alert alert-info pull-right" role="alert">
              <strong>Test</strong> by <a href="#" class="alert-link">Jesse Junsay</a>, July 2015.
            </div>
        </div>
    </div>
    <div class="row">
        <a href="javascript:void(0);" class="list-group-item active">
            <h4 class="list-group-item-heading">{{ rootReviews.business_info.business_name }}</h4>
            <p class="list-group-item-text">Address: {{ rootReviews.business_info.business_address }}</p>
            <p class="list-group-item-text">Phone: {{ rootReviews.business_info.business_phone }}</p>
            <p class="list-group-item-text">External Url: {{ rootReviews.external_info.business_url }}</p>
            <p class="list-group-item-text">Page: {{ rootReviews.business_info.external_page_url }}</p>
            <p class="list-group-item-text">Average Rating: {{ rootReviews.business_info.total_rating.total_avg_rating }}</p>
            <p class="list-group-item-text">No. of Reviews: {{ rootReviews.business_info.total_rating.total_no_of_reviews }}</p>
          </a>
    </div>
    <div class="row">
        <div class="list-group">
            <nav>
                <ul class="pagination">
                    <li ng-repeat="n in [] | range:PageCount"><a href="javascript:void(0);" ng-click="getThisPage(n+1);" data-id="{{n + 1}}">{{n + 1}}</a></li>
                </ul>
            </nav>

            <div class="input-group" style="width:100%">
                <input type="text" class="form-control" placeholder="Search for..." data-ng-model="searchCriteria" style="width:100%">
            </div>
            
            <div id="reviewslist">
                <a href="javascript:void(0);" class="list-group-item" data-ng-repeat="review in reviews | filter:searchCriteria">
                    <h4 class="list-group-item-heading cl-md-6">{{ review.customer_name }}</h4>
                    <span class="list-group-item-text cl-md-6 pull-right"><i class="glyphicon glyphicon-star" ng-repeat="l in [] | range:review.rating"></i> </span>
                    <p class="list-group-item-text">Date Submitted: {{ review.date_of_submission }}</span></p>
                    <p class="list-group-item-text">Last Name: {{ review.customer_last_name }}</p>
                    <p class="list-group-item-text">Description: <I style="color:brown;">"{{ review.description }}"</I></p><br />
                    <p class="list-group-item-text">Review From: {{ review.review_from }}</p>
                    <p class="list-group-item-text">Url: {{ review.review_url }}</p>
                    <p class="list-group-item-text">Id: {{ review.review_id }}</p>
                    <p class="list-group-item-text">Customer Url: {{ review.customer_url }}</p>
                    <p class="list-group-item-text">Resource: {{ review.review_resource }}</p>
                </a>
            </div>
        </div>
    </div>
</div>