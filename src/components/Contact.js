import React, { Component } from "react";



class Contact extends Component {
    render() {
        return (
            <section className="" id="">
                <form method="post" action="../../contact.php" name="contact-form" id="working_form">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="form-group mt-2">
                                <label for="name" class="font-weight-bold">Name</label>
                                <input name="name" id="name" type="text" class="form-control" placeholder="Your name..." />
                                        </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group mt-2">
                                    <label for="email" class="font-weight-bold">Email address</label>
                                    <input name="email" id="email" type="email" class="form-control" placeholder="Your email..." />
                                        </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group mt-2">
                                        <label for="subject" class="font-weight-bold">Subject</label>
                                        <input type="text" class="form-control" id="subject" placeholder="Your Subject.." />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-group mt-2">
                                        <label for="comments" class="font-weight-bold">Message</label>
                                        <textarea name="comments" id="comments" rows="4" class="form-control" placeholder="Your message..."></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12 text-right">
                                    <input type="submit" id="submit" name="send" class="submitBnt btn btn-custom" value="Send Message" />
                                        <div id="simple-msg"></div>
                                    </div>
                                </div>
                            </form>
        </section>
        );
    }
  }
  export default Contact;