import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Check, CreditCard, Package, Truck, Trash2, Plus, Minus } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  address: z.string().min(5, 'Address must be at least 5 characters'),
  city: z.string().min(2, 'City must be at least 2 characters'),
  postalCode: z.string().min(3, 'Postal code must be at least 3 characters'),
  paymentMethod: z.enum(['card', 'mobile', 'cash'])
});

type FormValues = z.infer<typeof formSchema>;

const Checkout: React.FC = () => {
  const [step, setStep] = useState<'shipping' | 'payment' | 'review'>('shipping');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { formatPrice } = useCurrency();
  const { items, removeItem, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      postalCode: '',
      paymentMethod: 'card'
    }
  });

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = items.length > 0 ? 15 : 0;
  const tax = subtotal * 0.18;
  const total = subtotal + shipping + tax;

  const onSubmit = (values: FormValues) => {
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Order placed successfully!",
        description: "Your order has been confirmed. Thank you for shopping with us!"
      });

      clearCart();
      navigate('/');
      setIsSubmitting(false);
    }, 1500);
  };

  const handleRemoveItem = (id: string) => {
    removeItem(id);
    toast({
      title: "Item removed",
      description: "Product has been removed from your cart"
    });
  };

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity);
    }
  };

  const goToPayment = () => {
    form.trigger(['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'postalCode']);
    if (form.getFieldState('firstName').invalid || form.getFieldState('lastName').invalid || form.getFieldState('email').invalid || form.getFieldState('phone').invalid || form.getFieldState('address').invalid || form.getFieldState('city').invalid || form.getFieldState('postalCode').invalid) {
      return;
    }
    setStep('payment');
  };

  const goToReview = () => {
    if (!form.getValues('paymentMethod')) {
      form.setError('paymentMethod', {
        type: 'manual',
        message: 'Please select a payment method'
      });
      return;
    }
    setStep('review');
  };

  return <Layout>
      <div className="pt-32 pb-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex-1">
              <div className="mb-8">
                <h1 className="text-3xl font-bold">Checkout</h1>
                <p className="text-muted-foreground mt-1">Complete your purchase</p>
              </div>
              
              {items.length === 0 ? (
                <div className="text-center py-8">
                  <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
                  <p className="text-muted-foreground mb-6">Add items to your cart to proceed with checkout</p>
                  <Button 
                    variant="default" 
                    onClick={() => navigate('/products')}
                  >
                    Browse Products
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'shipping' || step === 'payment' || step === 'review' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                          <span>1</span>
                        </div>
                        <span>Delivering</span>
                      </div>
                      <div className="h-0.5 flex-1 bg-muted mx-4"></div>
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'payment' || step === 'review' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                          <span>2</span>
                        </div>
                        <span>Payment</span>
                      </div>
                      <div className="h-0.5 flex-1 bg-muted mx-4"></div>
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'review' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                          <span>3</span>
                        </div>
                        <span>Review</span>
                      </div>
                    </div>
                  </div>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                      {step === 'shipping' && <div className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField control={form.control} name="firstName" render={({
                          field
                        }) => <FormItem>
                                  <FormLabel>First Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="First Name" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>} />
                            <FormField control={form.control} name="lastName" render={({
                          field
                        }) => <FormItem>
                                  <FormLabel>Last Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Last Name" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>} />
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField control={form.control} name="email" render={({
                          field
                        }) => <FormItem>
                                  <FormLabel>Email</FormLabel>
                                  <FormControl>
                                    <Input type="email" placeholder="your@email.com" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>} />
                            <FormField control={form.control} name="phone" render={({
                          field
                        }) => <FormItem>
                                  <FormLabel>Phone Number</FormLabel>
                                  <FormControl>
                                    <Input placeholder="+255 XXX XXX XXX" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>} />
                          </div>
                          
                          <FormField control={form.control} name="address" render={({
                        field
                      }) => <FormItem>
                                <FormLabel>Address</FormLabel>
                                <FormControl>
                                  <Input placeholder="Street address" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>} />
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField control={form.control} name="city" render={({
                          field
                        }) => <FormItem>
                                  <FormLabel>City</FormLabel>
                                  <FormControl>
                                    <Input placeholder="City" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>} />
                            <FormField control={form.control} name="postalCode" render={({
                          field
                        }) => <FormItem>
                                  <FormLabel>Postal Code</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Postal Code" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>} />
                          </div>
                          
                          <div className="pt-4">
                            <Button type="button" onClick={goToPayment} className="w-full md:w-auto">
                              Continue to Payment
                            </Button>
                          </div>
                        </div>}
                      
                      {step === 'payment' && <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-medium mb-4">Select Payment Method</h3>
                            <Tabs defaultValue="card" onValueChange={value => form.setValue('paymentMethod', value as 'card' | 'mobile' | 'cash')}>
                              <TabsList className="grid grid-cols-3 mb-4">
                                <TabsTrigger value="card">Card</TabsTrigger>
                                <TabsTrigger value="mobile">Mobile Money</TabsTrigger>
                                <TabsTrigger value="cash">Cash on Delivery</TabsTrigger>
                              </TabsList>
                              
                              <TabsContent value="card" className="space-y-4">
                                <Card>
                                  <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                      <CreditCard className="h-5 w-5" />
                                      <span>Credit / Debit Card</span>
                                    </CardTitle>
                                    <CardDescription>Pay using Visa, Mastercard or other cards</CardDescription>
                                  </CardHeader>
                                  <CardContent>
                                    <div className="space-y-4">
                                      <div className="grid gap-2">
                                        <Label htmlFor="cardNumber">Card Number</Label>
                                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                                      </div>
                                      <div className="grid grid-cols-2 gap-4">
                                        <div className="grid gap-2">
                                          <Label htmlFor="expiry">Expiry Date</Label>
                                          <Input id="expiry" placeholder="MM/YY" />
                                        </div>
                                        <div className="grid gap-2">
                                          <Label htmlFor="cvc">CVC</Label>
                                          <Input id="cvc" placeholder="123" />
                                        </div>
                                      </div>
                                      <div className="grid gap-2">
                                        <Label htmlFor="nameOnCard">Name on Card</Label>
                                        <Input id="nameOnCard" placeholder="John Doe" />
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              </TabsContent>
                              
                              <TabsContent value="mobile" className="space-y-4">
                                <Card>
                                  <CardHeader>
                                    <CardTitle>Mobile Money</CardTitle>
                                    <CardDescription>Pay using M-Pesa, Tigo Pesa, Airtel Money, etc.</CardDescription>
                                  </CardHeader>
                                  <CardContent>
                                    <div className="space-y-4">
                                      <div className="grid gap-2">
                                        <Label htmlFor="mobileNumber">Mobile Number</Label>
                                        <Input id="mobileNumber" placeholder="+255 XXX XXX XXX" />
                                      </div>
                                      <div className="text-sm text-muted-foreground">
                                        After clicking "Continue to Review", you will receive a prompt on your phone to confirm the payment.
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              </TabsContent>
                              
                              <TabsContent value="cash" className="space-y-4">
                                <Card>
                                  <CardHeader>
                                    <CardTitle>Cash on Delivery</CardTitle>
                                    <CardDescription>Pay when you receive your order</CardDescription>
                                  </CardHeader>
                                  <CardContent>
                                    <div className="text-sm">
                                      <p>You will pay the full amount when the order is delivered to your address.</p>
                                      <p className="mt-2">Please ensure that you have the exact amount as our delivery personnel may not have change.</p>
                                    </div>
                                  </CardContent>
                                </Card>
                              </TabsContent>
                            </Tabs>
                            
                            {form.formState.errors.paymentMethod && <p className="text-sm font-medium text-destructive mt-2">
                                {form.formState.errors.paymentMethod.message}
                              </p>}
                          </div>
                          
                          <div className="flex gap-4 pt-4">
                            <Button type="button" variant="outline" onClick={() => setStep('shipping')}>
                              Back
                            </Button>
                            <Button type="button" onClick={goToReview}>
                              Continue to Review
                            </Button>
                          </div>
                        </div>}
                      
                      {step === 'review' && <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-medium mb-4">Review Your Order</h3>
                            
                            <div className="space-y-4">
                              <Card>
                                <CardHeader>
                                  <CardTitle className="flex items-center gap-2">
                                    <Truck className="h-5 w-5" />
                                    <span>Shipping Information</span>
                                  </CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <div className="grid gap-1">
                                    <p className="font-medium">{form.getValues('firstName')} {form.getValues('lastName')}</p>
                                    <p>{form.getValues('email')}</p>
                                    <p>{form.getValues('phone')}</p>
                                    <p>{form.getValues('address')}</p>
                                    <p>{form.getValues('city')}, {form.getValues('postalCode')}</p>
                                  </div>
                                </CardContent>
                              </Card>
                              
                              <Card>
                                <CardHeader>
                                  <CardTitle className="flex items-center gap-2">
                                    <CreditCard className="h-5 w-5" />
                                    <span>Payment Method</span>
                                  </CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <p>
                                    {form.getValues('paymentMethod') === 'card' && 'Credit/Debit Card'}
                                    {form.getValues('paymentMethod') === 'mobile' && 'Mobile Money'}
                                    {form.getValues('paymentMethod') === 'cash' && 'Cash on Delivery'}
                                  </p>
                                </CardContent>
                              </Card>
                              
                              <Card>
                                <CardHeader>
                                  <CardTitle className="flex items-center gap-2">
                                    <Package className="h-5 w-5" />
                                    <span>Order Summary</span>
                                  </CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <div className="space-y-4">
                                    {items.map(item => <div key={item.id} className="flex justify-between">
                                        <div>
                                          <p className="font-medium">{item.name}</p>
                                          <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                                        </div>
                                        <p>{formatPrice(item.price * item.quantity)}</p>
                                      </div>)}
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                          </div>
                          
                          <div className="flex gap-4 pt-4">
                            <Button type="button" variant="outline" onClick={() => setStep('payment')}>
                              Back
                            </Button>
                            <Button type="submit" disabled={isSubmitting} className="flex-1">
                              {isSubmitting ? "Processing..." : "Place Order"}
                            </Button>
                          </div>
                        </div>}
                    </form>
                  </Form>
                </>
              )}
            </div>
            
            <div className="w-full md:w-96">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {items.length > 0 ? (
                    items.map(item => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div>
                          <p>{item.name}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Button 
                              variant="outline" 
                              size="icon" 
                              className="h-6 w-6 rounded-full"
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button 
                              variant="outline" 
                              size="icon" 
                              className="h-6 w-6 rounded-full"
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <p>{formatPrice(item.price * item.quantity)}</p>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 text-destructive hover:bg-destructive/10"
                            onClick={() => handleRemoveItem(item.id)}
                            aria-label={`Remove ${item.name} from cart`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-muted-foreground">Your cart is empty</p>
                      <Button 
                        variant="outline" 
                        className="mt-2"
                        onClick={() => navigate('/products')}
                      >
                        Continue Shopping
                      </Button>
                    </div>
                  )}
                  
                  {items.length > 0 && (
                    <>
                      <Separator className="my-4" />
                      
                      <div className="flex justify-between">
                        <p>Subtotal</p>
                        <p>{formatPrice(subtotal)}</p>
                      </div>
                      <div className="flex justify-between">
                        <p>Shipping</p>
                        <p>{formatPrice(shipping)}</p>
                      </div>
                      <div className="flex justify-between">
                        <p>Tax (18% VAT)</p>
                        <p>{formatPrice(tax)}</p>
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <div className="flex justify-between font-bold">
                        <p>Total</p>
                        <p>{formatPrice(total)}</p>
                      </div>
                    </>
                  )}
                </CardContent>
                <CardFooter className="bg-muted/50 px-6 py-4 flex items-center justify-center text-sm text-muted-foreground">
                  <p className="flex items-center gap-1">
                    <Check className="h-4 w-4 text-primary" />
                    Secure Checkout
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>;
};

export default Checkout;
