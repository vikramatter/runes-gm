// import { InsertContact } from "@shared/schema";
import { useToast } from "../hooks/use-toast";
import { useForm } from "react-hook-form";


import emailjs from '@emailjs/browser';

// import { insertContactSchema } from "@shared/schema";
import { Button } from "../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";


// Extend the schema with custom validation
// const contactFormSchema = insertContactSchema.extend({
//   email: z.string().email("Please enter a valid email address"),
//   message: z.string().min(10, "Message must be at least 10 characters"),
// });


const Contact = () => {
  const { toast } = useToast();

  const form = useForm({
    // resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const sendEmail = (data: any) => {
    console.log(data, "data");

    emailjs.send('service_x5yz9wm', 'template_21uzrnq', data, 'TYZVTK8RE1vGesuiY')
      .then(
        () => {
          console.log('SUCCESS!');
          toast({
            title: "Message Sent",
            description:
              "Thank you for your message. We will get back to you soon!",
            variant: "default",
          });
          form.reset();
        },


      ).catch((error) => {
        console.log('FAILED...', error.text);
        toast({
          title: "Error",
          description:
            "There was an error sending your message. Please try again.",
          variant: "destructive",
        });
      }
      );
  };

  // const contactMutation = useMutation({
  //   mutationFn: async (data: InsertContact) => {
  //     const response = await apiRequest("POST", "/api/contact", data);
  //     return response.json();
  //   },
  //   onSuccess: () => {
  //     toast({
  //       title: "Message Sent",
  //       description:
  //         "Thank you for your message. We will get back to you soon!",
  //       variant: "default",
  //     });
  //     form.reset();
  //   },
  //   onError: () => {
  //     toast({
  //       title: "Error",
  //       description:
  //         "There was an error sending your message. Please try again.",
  //       variant: "destructive",
  //     });
  //   },
  // });

  // function onSubmit(data: ContactFormValues) {
  //   contactMutation.mutate(data);
  // }

  return (
    <section id="contact">
      <div className="container">
        {/* Section intro removed to avoid duplication */}

        <div className="flex flex-col mb-2 lg:flex-row gap-2">
          <AnimatedSection className="w-full lg:w-1/2" from="left">

            {/* 
                <label>Full Name</label>
                <input width="10" placeholder="John Doe" type="text" name="user_name" value={name}
onChange={(e) => setName(e.target.value)}/>
                <label>Email</label>
      <input type="email" name="user_email" placeholder="john@example.com" value={email}
onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <label>Message</label>
      <textarea
      cols="30"
      rows="10"
      value={message}
      onChange={(e) => setMessage(e.target.value)}/> */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(sendEmail)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="(123) 456-7890" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="How can we help you?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your inquiry..."
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full md:w-auto   text-white"
                // disabled={contactMutation.isPending}
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </AnimatedSection>

          <AnimatedSection className="w-full lg:w-1/2" from="right">
            <div className="bg-gray-50 p-8 rounded-lg h-full">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-6 text-gray-900">
                  Contact Information
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="text-primary-600 mt-1 mr-3">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Address</h4>
                      <p className="text-gray-700">
                        RUNES GLOBEMARK LLP
                        <br />
                        131 W 33RD ST 16TH FLOOR
                        <br />
                        NEW YORK, NY 10001
                        <br />
                        United States
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary-600 mt-1 mr-3">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Phone</h4>
                      <p className="text-gray-700">(+1)7323224971</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary-600 mt-1 mr-3">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Email</h4>
                      <p className="text-gray-700">team@runesgm.com  </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary-600 mt-1 mr-3">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Hours</h4>
                      <p className="text-gray-700">
                        Monday - Friday: 8:00 AM-6 PM (EST)
                        <br />
                        Saturday & Sunday: Closed
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              {/* <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 hover:bg-primary-200 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 hover:bg-primary-200 transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 hover:bg-primary-200 transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 hover:bg-primary-200 transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div> */}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
